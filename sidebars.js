module.exports = {
  someSidebar: [
    'getting-started',
      {
        type: "category",
        label: "Framework",
        items: [
          {
             type: "category",
             label: "API",
             items: [
            "tfx_api/index",
            "tfx_api/loading/index",
            "tfx_api/loading/setup/index",
            "tfx_api/loading/install/index",
          ],
         },
           {
             type: "category",
             label: "Commands",
             items: [
            "tfx_framework/commands/index",
            "tfx_framework/commands/economy/index",
            "tfx_framework/commands/jobs/index",
          ],
         },
        ],
      },
   ],
};
