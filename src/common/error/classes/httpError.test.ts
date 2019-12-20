import { expect } from "chai";

import { HttpError } from "./httpError";

const status = 400;

const reason = "Bad Request";
const customReason = "Invalid syntax";

const error = new HttpError(status);

describe("HTTP Error class", () => {
    it("Returns the string form", done => {
        expect(error.toString()).to.deep.equal(
            `HTTP Error: ${status} — ${reason}`
        );

        done();
    });

    it("Creates an error with a custom reason", done => {
        const customError = new HttpError(status, customReason);

        expect(customError.reason).to.deep.equal(customReason);

        done();
    });
});
