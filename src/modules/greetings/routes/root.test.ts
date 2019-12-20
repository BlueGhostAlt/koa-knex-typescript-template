import request from "supertest";
import { expect } from "chai";

import knex from "../../../../db/knex";

import { server } from "../../../";

import greetings from "../../../../db/seeds/examples/greetings";

describe("Root route", () => {
    before(async () => {
        await knex.migrate.latest();
        await knex.seed.run();
    });

    it("Gets all greetings", async () => {
        const response = await request(server)
            .get("/api/greetings")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200);

        expect(response.body).to.deep.equal(
            greetings.map((greeting, index) => {
                return { ...greeting, id: index + 1 };
            })
        );
    });
});
