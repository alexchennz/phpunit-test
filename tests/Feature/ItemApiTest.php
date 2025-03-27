<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ItemApiTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_items_endpoint_returns_data():void
    {
        // Make a GET request to the API endpoint
        $response = $this->getJson('/api/items');

        // Assert that the response status is 200 OK
        $response->assertStatus(200);

        // Assert that the response is an array with at least 2 items
        $response->assertJsonCount(3);

        // Assert the structure of the first item
        $response->assertJsonFragment(['id' => 1, 'name' => 'Item 1']);
        $response->assertJsonFragment(['id' => 3, 'name' => 'Item 3']);

        $response->assertJsonStructure([
            '*'=>['id', 'name']
        ]);
    }
}
