import os
from UPDATE_DOC_DATA import content

class CreateDocumentation:
    def writedoc(self, folder_file: list):
        
        with open("DOCUMENTATION.md", "w") as doc:
            doc.write(f"# {content['title']}\n\
{content["text"]}\n\n")

            doc.write(f"## {content['sub_title']}\n")

            # sorting the folders before adding to doc
            folder_file = sorted(folder_file)

            # getting folder name and file list
            for files in folder_file:
                # writing folder name to doc
                doc.write(f"- [{files}]({content['path'] + files})\n")
                

class Files:
    def get_all_valid_folder_files_dict(self, data_location):
        all_files = []
        cwd = data_location

        for f in os.listdir(cwd):
            if f not in content['ignore']:
                all_files.append(f)

        # return (all_files)
        return all_files


def main():
    # getting repository location
    cwd = os.getcwd()

    # getting file data
    ff = Files()
    data = (ff.get_all_valid_folder_files_dict(cwd))
    # print(data)

    # writing to Documentation.md
    doc = CreateDocumentation()
    doc.writedoc(data) # documentation will be written in the repo home

    
if __name__ == '__main__':
    main()