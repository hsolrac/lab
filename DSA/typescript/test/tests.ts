let testCounter = 0;

export const assertEquals = <T>(
  actual: T,
  expected: T,
  { message, sortArray }: { message?: string; sortArray: boolean } = {
    sortArray: false,
  }
): void => {
  testCounter++;

  const expectedJson = JSON.stringify(
    expected instanceof Array && sortArray ? expected.sort() : expected
  );
  const actualJson = JSON.stringify(
    actual instanceof Array && sortArray ? actual.sort() : actual
  );

  if (expectedJson !== actualJson)
    throw new Error(
      `${
        message !== undefined ? "[" + message + "] " : ""
      }Test ${testCounter} failed: >>>>>>>>>> Expected ${expectedJson}, but got ${actualJson} instead <<<<<<<<<<`
    );
};

export function assertIsNotUndefined<T>(
  val: T | undefined | null
): asserts val is NonNullable<T> | null {
  if (val === undefined)
    throw new TypeError(
      `Expected value not to be undefined, but received ${val}`
    );
}

export function assertIsNotNull<T>(
  val: T | undefined | null
): asserts val is NonNullable<T> | undefined {
  if (val === null)
    throw new TypeError(`Expected value not to be null, but received ${val}`);
}

export function assertIsNotUndefinedOrNull<T>(
  val: T | undefined | null
): asserts val is NonNullable<T> {
  if (val === undefined || val === null)
    throw new TypeError(
      `Expected value not to be undefined or null, but received ${val}`
    );
}

export const assertRaisesException = <T extends Error>(
  fn: () => void,
  expectedExceptionClass: new () => T
) => {
  testCounter++;

  let expectedExceptionRaised = false;
  let actualException: Error | undefined;

  try {
    fn();
  } catch (e: any) {
    actualException = e;

    expectedExceptionRaised = actualException instanceof expectedExceptionClass;
  }

  if (!expectedExceptionRaised) {
    const errorMessage =
      `Test ${testCounter} failed: >>>>>>>>>> Expected callback to raise exception "${expectedExceptionClass.name}", but ` +
      (actualException !== undefined
        ? `got exception "${actualException.name}" with message "${actualException.message}" instead <<<<<<<<<<`
        : `none was raised <<<<<<<<<<`);

    throw new Error(errorMessage);
  }
};
