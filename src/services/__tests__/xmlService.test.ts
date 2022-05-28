import XmlService from "../xmlService";
const xmlService = new XmlService();

describe("should return 200 if response object is formatted", () => {
  it("should", async () => {
    const res = await xmlService.transform(440);
    expect(res).toMatchObject({
      makeId: expect.anything(),
      makeName: expect.anything(),
      vehicleTypes: expect.anything(),
    });
  });
});