export const data = [
    {
      "name": "root",
      "type": "folder",
      "content": [
        {
          "name": "folder1",
          "type": "folder",
          "content": [
            {
              "name": "file1.txt",
              "type": "file",
              "content": "This is the content of file1."
            },
            {
              "name": "file2.txt",
              "type": "file",
              "content": "This is the content of file2."
            },
            {
              "name": "subfolder1",
              "type": "folder",
              "content": [
                {
                  "name": "file3.txt",
                  "type": "file",
                  "content": "This is the content of file3 inside subfolder1."
                }
              ]
            }
          ]
        },
        {
          "name": "folder2",
          "type": "folder",
          "content": [
            {
              "name": "file4.txt",
              "type": "file",
              "content": "This is the content of file4 inside folder2."
            }
          ]
        },
        {
          "name": "file5.txt",
          "type": "file",
          "content": "This is the content of file5 at the root level."
        }
      ]
    }
  ]