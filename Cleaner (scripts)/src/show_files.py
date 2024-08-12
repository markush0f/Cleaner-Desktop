import os

def show_files(actual_dir):
    for root, dirs, files in os.walk(actual_dir):
        print(files)
        # print(dirs) 
        break

show_files(r"C:\Users\Markus")