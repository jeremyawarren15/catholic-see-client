import { DateTime } from 'luxon';

const subRequestDateGetter = () => {
  const dt = DateTime.now();
  dt.set({ day: 0 });
  console.log(dt);
};

export default subRequestDateGetter;
