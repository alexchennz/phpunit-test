import { useEffect, useRef, useState } from "react";

export default function Notification() {
    const [showMessage, setShowMessage] = useState(false);
    const [hasUnread, setHasUnread] = useState(true);
    const dropdownRef = useRef(null);
    const bellRef = useRef(null);
    const clickHandler = (event) => {
        event.stopPropagation();
        setShowMessage(true);
        if (hasUnread) setHasUnread(false); // Mark as read when opened
    }
    // Close notification when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && 
                !dropdownRef.current.contains(event.target) &&
                bellRef.current && 
                !bellRef.current.contains(event.target)) {
                setShowMessage(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  return (
    <div className="relative">
        <div className="relative cursor-pointer size-5 right-0" ref={bellRef} onClick={clickHandler}>
            <svg version="1.1" className="size-5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="120.641px" height="122.878px" viewBox="0 0 120.641 122.878" enableBackground="new 0 0 120.641 122.878" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M68.16,6.889c18.129,3.653,31.889,19.757,31.889,38.921 c0,22.594-2.146,39.585,20.592,54.716c-40.277,0-80.366,0-120.641,0C22.8,85.353,20.647,68.036,20.647,45.81 c0-19.267,13.91-35.439,32.182-38.979C53.883-2.309,67.174-2.265,68.16,6.889L68.16,6.889z M76.711,109.19 c-1.398,7.785-8.205,13.688-16.392,13.688c-8.187,0-14.992-5.902-16.393-13.688H76.711L76.711,109.19z"/></g></svg>
            {/* Unread badge */}
            {hasUnread && (
                <span className="absolute bottom-0 right-0 bg-red-500 size-2 rounded-full"></span>
            )}
        </div>
        {showMessage && (
            <div ref={dropdownRef} className="absolute top-6 right-0 p-4 rounded bg-white shadow-md border border-gray-200 z-10">
                <ul className="list-disc flex flex-col gap-4 px-4">
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati libero dolores dolorem eaque perspiciatis dolor expedita distinctio maiores, sunt velit repellendus unde animi quae voluptate soluta est sapiente quisquam repudiandae!</li>
                    <li>Temporibus perspiciatis iusto explicabo, illo repellendus, nemo harum amet iure natus necessitatibus saepe molestiae inventore aspernatur eos. Adipisci, voluptatibus a et dicta quo quidem libero quae tenetur iure ipsa distinctio?</li>
                    <li>Quisquam ad commodi, quibusdam inventore a voluptatum, soluta animi porro, voluptates beatae cupiditate impedit provident officiis accusamus odio ullam assumenda iste amet molestias et? Quis voluptas esse illo itaque explicabo.</li>
                    <li>Quam labore fuga at sunt itaque praesentium aspernatur, perferendis dicta consequuntur vero asperiores molestias! Qui soluta quasi, voluptatibus corrupti necessitatibus tempora reiciendis nisi sapiente consectetur incidunt. Est nesciunt possimus temporibus.</li>
                </ul>
            </div>
        )}
    </div>
  )
}