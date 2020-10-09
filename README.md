# Minutes

## Project Description

The service we try to create is that extracts voices from video meetings, summarizes the contents of video meetings, and automatically registers what needs to be done in the calendar.
The main functions were subdivided into three elements.
First, Speech to Text. MS Azure's Speech to Text service will be applied here.
Second, data mining and summary of extracted text. MS Azure's Text analysis will be applied.
Finally, the extracted Todo is linked to the calendar.
With this service, it will be able to automatically generate a Todo list via video conversations to increase the productivity of remote work.

## Frontend

### Script

```
git clone https://github.com/Minutes-JunctionXSeoul/frontend.git

// 로컬에서 실행 시 (http://localhost:3000)
yarn start

// 빌드 시
yarn build
```
