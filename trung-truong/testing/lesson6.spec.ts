import { expect, test } from "@playwright/test";

let _postID: string

// Create post
test("Create a post", async ({ request }) => {
    const _response = await request.post('post/create', {
        data: {
            text: "0309-6",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Red_flag.svg/2560px-Red_flag.svg.png",
            likes: 6,
            tags: ["red", "super-red","0309-2"],
            owner: "60d0fe4f5311236168a109d4"
        },
        headers: {
            "app-id": "621f1ad6df839b28e4b77ddc"
        }
    });
    expect(_response.status()).toEqual(200);
    expect(_response.ok()).toBeTruthy();
    // console.log(JSON.parse((await _response.body()).toString()))
    console.log(await _response.json())
    const _id = await _response.json()
    _postID = _id.id;
    console.log(_postID)
});

// Get post
test("Get post by id", async ({ request }) => {
    const _response = await request.get('post/'+_postID, {
        headers: {
            "app-id": "621f1ad6df839b28e4b77ddc"
        }
    });
    expect(_response.status()).toEqual(200);
    expect(_response.ok()).toBeTruthy();
    // console.log(JSON.parse((await _response.body()).toString()))
    console.log(await _response.json())
})