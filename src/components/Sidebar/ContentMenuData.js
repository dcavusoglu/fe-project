import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumIcon from '@mui/icons-material/Forum';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';


export const ContentMenuData = [
  {
    "title": "notifications",
    "icon": <NotificationsNoneIcon/>,
  },

  {
    "title": "Summary",
    "icon": <ShowChartIcon/>,
    "children": [
      {
        "title": "This week",
        "icon": <ShowChartIcon/>
      }
    ]
  },

  {
    "title": "Publish",
    "icon": <HistoryEduIcon/>,
    "children": [
      {
        "title": "Compose",
        "icon": "•",
      },
      {
        "title": "Feed",
        "icon": "•",
      },
    ]
  },

  {
    "title": "Engage",
    "icon": <ForumIcon/>
  },

  {
    "title": "Listen",
    "icon": <EarbudsIcon/>
  },

  {
    "title": "Report",
    "icon": <BarChartIcon/>,
    "children": [
      {
        "title": "This week",
        "icon": <ShowChartIcon/>,
      },
    ]
  }


]
