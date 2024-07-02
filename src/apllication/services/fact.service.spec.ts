import { FactService } from "@/apllication/services/fact.service";
import { Test } from '@nestjs/testing';

describe("", () => {
  let sut: FactService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FactService],
    }).compile();

    sut = moduleRef.get<FactService>(FactService);
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
  })

  it("should throw if network throws", async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error());
    await expect(sut.getFact()).rejects.toThrow("Could not fetch fact at this time. Please try again later.")
  })

  it("should error if fetch not return success", async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: false } as Response);
    await expect(sut.getFact()).rejects.toThrow("Could not fetch fact at this time. Please try again later.")
  })

  it("should success", async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => (
        {
          "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
          "id": "qtQw_2q3QiWOp4FuXiiMlA",
          "url": "",
          "value": "Chuck Norris can drive a freight train on a dirt road"
        }
      )
    } as Response)

    const result = await sut.getFact();

    expect(result.value).toBe("Chuck Norris can drive a freight train on a dirt road");
  })
})