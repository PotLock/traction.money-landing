import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

export const Marquee = ({ className, keywords = [] }) =>
  keywords.length === 0 ? null : (
    <div className={clsx(className, "container flex overflow-x-hidden relative")}>
      <ul className="animate-marquee whitespace-nowrap">
        {keywords.map(({ text, color }) => (
          <li
            key={uuidv4()}
            className="badge badge-lg mx-3 p-3 min-w-fit"
            style={{ backgroundColor: color }}
          >
            {text}
          </li>
        ))}
      </ul>

      <ul className="animate-marquee2 whitespace-nowrap absolute top-0">
        {keywords.map(({ text, color }) => (
          <li
            key={uuidv4()}
            className="badge badge-lg mx-3 p-3 min-w-fit"
            style={{ backgroundColor: color }}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
