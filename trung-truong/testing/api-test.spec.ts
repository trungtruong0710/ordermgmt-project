import { expect, test } from "@playwright/test";

let _discountID: string
const getDiscount = "{discount(where:{name: {_like: \"%04202022-01%\"}}) {discount_id, name}}"

// Create post
test("Create a post", async ({ request }) => {

    const _response = await request.post('https://admin.uat.manabie.io:31600/fatima/v1/graphql', {
        data: {
            query: getDiscount
        },
        headers: {
            "x-hasura-admin-secret": "YzcQ9DHzmZxgHM3qA3kkmKWh"
        }
    });

    console.log(JSON.stringify(await _response.json(), null, 2))
});