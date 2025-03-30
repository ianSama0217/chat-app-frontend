import Index from "../containers/index";
import Main from "../containers/main";

const router = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
];

export default router;
