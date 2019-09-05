import convertNumberToReadableThaiText from "./index";

describe("test convertNumberToReadableThaiText", () => {
  test("1 shoud return หนึ่ง", () => {
    const result = convertNumberToReadableThaiText(1);
    expect(result).toBe("หนึ่ง");
  });
  test("9 shoud return เก้า", () => {
    const result = convertNumberToReadableThaiText(9);
    expect(result).toBe("เก้า");
  });
  test("11 shoud return สิบเอ็ด", () => {
    const result = convertNumberToReadableThaiText(11);
    expect(result).toBe("สิบเอ็ด");
  });
  test("12 shoud return สิบสอง", () => {
    const result = convertNumberToReadableThaiText(12);
    expect(result).toBe("สิบสอง");
  });
  test("21 shoud return ยี่สิบเอ็ด", () => {
    const result = convertNumberToReadableThaiText(21);
    expect(result).toBe("ยี่สิบเอ็ด");
  });
  test("50 shoud return ห้าสิบ", () => {
    const result = convertNumberToReadableThaiText(50);
    expect(result).toBe("ห้าสิบ");
  });
  test("100 shoud return หนึ่งร้อย", () => {
    const result = convertNumberToReadableThaiText(100);
    expect(result).toBe("หนึ่งร้อย");
  });
  test("1000 shoud return หนึ่งพัน", () => {
    const result = convertNumberToReadableThaiText(1000);
    expect(result).toBe("หนึ่งพัน");
  });
  test("1001 shoud return หนึ่งพันเอ็ด", () => {
    const result = convertNumberToReadableThaiText(1001);
    expect(result).toBe("หนึ่งพันเอ็ด");
  });
  test("1010 shoud return หนึ่งพันสิบ", () => {
    const result = convertNumberToReadableThaiText(1010);
    expect(result).toBe("หนึ่งพันสิบ");
  });
  test("1011 shoud return หนึ่งพันสิบเอ็ด", () => {
    const result = convertNumberToReadableThaiText(1011);
    expect(result).toBe("หนึ่งพันสิบเอ็ด");
  });
  test("1100 shoud return หนึ่งพันหนึ่งร้อย", () => {
    const result = convertNumberToReadableThaiText(1100);
    expect(result).toBe("หนึ่งพันหนึ่งร้อย");
  });
  test("1110 shoud return หนึ่งพันหนึ่งร้อยสิบ", () => {
    const result = convertNumberToReadableThaiText(1110);
    expect(result).toBe("หนึ่งพันหนึ่งร้อยสิบ");
  });
  test("1111 shoud return หนึ่งพันหนึ่งร้อยสิบเอ็ด", () => {
    const result = convertNumberToReadableThaiText(1111);
    expect(result).toBe("หนึ่งพันหนึ่งร้อยสิบเอ็ด");
  });
  test("9999 shoud return เก้าพันเก้าร้อยเก้าสิบเก้า", () => {
    const result = convertNumberToReadableThaiText(9999);
    expect(result).toBe("เก้าพันเก้าร้อยเก้าสิบเก้า");
  });
  test("11111 shoud return หนึ่งหมื่นหนึ่งพันหนึ่งร้อยสิบเอ็ด", () => {
    const result = convertNumberToReadableThaiText(11111);
    expect(result).toBe("หนึ่งหมื่นหนึ่งพันหนึ่งร้อยสิบเอ็ด");
  });
});
