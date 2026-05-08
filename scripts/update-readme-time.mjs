import fs from 'node:fs';

const readmePath = 'README.md';

const now = new Date();

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Ho_Chi_Minh',
  dateStyle: 'full',
  timeStyle: 'long',
});

const currentTime = formatter.format(now);

const readme = fs.readFileSync(readmePath, 'utf8');

const nextReadme = readme.replace(
  /<!-- TIME_START -->[\s\S]*?<!-- TIME_END -->/,
  `<!-- TIME_START -->
Last updated: **${currentTime}**
<!-- TIME_END -->`,
);

fs.writeFileSync(readmePath, nextReadme);
