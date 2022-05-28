import app from "../../server";
import request from "supertest";

describe("POST /xml/transform", () => {
    it("should return 200 if make id is passed", async () => {
        const res = await request(app)
        .post("/xml/transform")
        .send({makeId: 440});

        expect(res.statusCode).toEqual(200);
    });
    it("should return bad request if make id is missing", async () => {
        const res = await request(app)
          .post("/xml/transform")
          .send();

          expect(res.statusCode).toBe(400);
    });
    it("should return bad request if make id is invalid", async () => {
        const res = await request(app)
          .post("/xml/transform")
          .send({ makeId: '440' });

          expect(res.statusCode).toBe(400);
    });
})