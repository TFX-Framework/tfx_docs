module.exports = {
  someSidebar: [
    'getting-started',
    'installation',
      {
        type: "category",
        label: "Utilitys",
        items: [
         "utils/index",
           {
             type: "category",
             label: "Client Side",
             items: [
               "utils/client/index",
               "utils/client/tick",
               "utils/client/repeat",
               "utils/client/draw",
               "utils/client/draw3d",
               "utils/client/spawn",
               "utils/client/blip",
               "utils/client/format",
               "utils/client/players",
               "utils/client/table",
               "utils/client/anim",
               "utils/client/closest",
               "utils/client/make",
               "utils/client/key",
               "utils/client/print",
               "utils/client/position",
               "utils/client/value",
               "utils/client/vec",
             ],
           },
           {
             type: "category",
             label: "Server Side",
             items: [
               "utils/server/index",
               "utils/server/make",
               "utils/server/steam",
               "utils/server/string",
             ],
           },
        ],
      },
      {
        type: "category",
        label: "Commands",
        items: [
         "commands/index",
           {
             type: "category",
             label: "Economy",
             items: [
               "commands/economy/list",
             ],
           },
           {
             type: "category",
             label: "Jobs",
             items: [
               "commands/jobs/news",
             ],
           },
        ],
      },
   ],
};
