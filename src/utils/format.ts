import { DateTime } from "luxon";

 function removeLocaleFromPath(path: string) {
  return path.replace(/^\/[a-z]{2}/, "");
}

 function replaceI18n (template:string, replacements: Record<string, string >) {
  const reg = /{{\s*([^}\s]+)\s*}}/g;

  return template.replace(reg, (match, p1) => {
    return replacements[p1] || match;
  });

}

const getExperience = () => {
  const currentDate = DateTime.now();

  const targetDate = DateTime.fromObject({ year: 2019, month: 7, day: 1 });

  const diff = currentDate
    .diff(targetDate, ["years", "months", "days"])
    .toObject();

  return {
    years: String(Math.floor(diff.years ?? 0)),
    months: String(Math.floor(diff.months ?? 0)),
    days: String(Math.floor(diff.days ?? 0)),
  };
};

export {
  removeLocaleFromPath,
  replaceI18n,
  getExperience
}