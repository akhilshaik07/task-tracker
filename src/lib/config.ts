
import { AppConfig } from "../../types";

export const appConfig: any = {
  "app": {
    "id": "tpl-task",
    "name": "Task Tracker",
    "version": "1.0.0",
    "description": ""
  },
  "pages": [
    {
      "id": "t1",
      "slug": "t1",
      "name": "All Tasks",
      "title": "All Tasks",
      "type": "table",
      "entity": "tasks",
      "actions": [
        {
          "type": "create",
          "label": "Add Task"
        }
      ]
    },
    {
      "id": "t2",
      "slug": "t2",
      "name": "Add Task",
      "title": "Add Task",
      "type": "form",
      "entity": "tasks"
    }
  ],
  "entities": [
    {
      "name": "tasks",
      "label": "Tasks",
      "timestamps": true,
      "fields": [
        {
          "name": "title",
          "label": "Task Title",
          "type": "text",
          "required": true,
          "options": [],
          "unique": false,
          "hidden": false
        },
        {
          "name": "priority",
          "label": "Priority",
          "type": "select",
          "required": false,
          "options": [
            "low",
            "medium",
            "high",
            "urgent"
          ],
          "unique": false,
          "hidden": false
        },
        {
          "name": "completed",
          "label": "Completed",
          "type": "boolean",
          "required": false,
          "options": [],
          "unique": false,
          "hidden": false
        },
        {
          "name": "description",
          "label": "Description",
          "type": "textarea",
          "required": false,
          "options": [],
          "unique": false,
          "hidden": false
        }
      ]
    }
  ],
  "views": [
    {
      "id": "t1",
      "title": "All Tasks",
      "type": "table",
      "entity": "tasks",
      "actions": [
        {
          "type": "create",
          "label": "Add Task"
        }
      ]
    },
    {
      "id": "t2",
      "title": "Add Task",
      "type": "form",
      "entity": "tasks"
    }
  ],
  "name": "Task Tracker",
  "auth": {
    "enabled": false,
    "provider": "email",
    "protect": []
  },
  "i18n": {
    "defaultLocale": "en",
    "supportedLocales": [
      "en"
    ],
    "translations": {}
  }
};
