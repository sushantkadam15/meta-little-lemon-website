import dayjs from "dayjs";

export const fetchAPI = () => {
  const now = dayjs();
  const oneWeekLater = now.add(1, "week");

  const randomTimes = [];
  const startHour = 15; // 3:00 PM
  const endHour = 23; // 11:00 PM

  for (let day = now; day.isBefore(oneWeekLater); day = day.add(1, "day")) {
    const randomHour =
      Math.floor(Math.random() * ((endHour -1) - startHour + 1)) + startHour;

    const randomTime = day
      .set("hour", randomHour)
      .set("minute", 0)
      .set("second", 0);
    randomTimes.push(randomTime);
  }

  return randomTimes;
};

export const submitAPI = (formData) => true;
