function createLogger() {
  const warnMethod = (message) => {
    const memory = [];

    const memoryObj = {
      message: message,
      dateTime: new Date(),
      type: "warn",
    };

    memory.push(...memory, memoryObj);

    return memory;
  };

  const errorMethod = (message) => {
    const memory = [];

    const memoryObj = {
      message: message,
      dateTime: new Date(),
      type: "error",
    };

    memory.push(...memory, memoryObj);

    return memory;
  };

  const logMethod = (message) => {
    const memory = [];

    const memoryObj = {
      message: message,
      dateTime: new Date(),
      type: "log",
    };

    memory.push(...memory, memoryObj);

    return memory;
  };

  const getRecordMethod = (string) => {
    if (string === "log") {
      return logMethod();
    }
    //... ну і такі даліє
  };

  const methodObj = {
    warn: warnMethod,
    error: errorMethod,
    log: logMethod,
    getRecods: getRecordMethod,
  };

  return methodObj;
}

const logger = new createLogger();
