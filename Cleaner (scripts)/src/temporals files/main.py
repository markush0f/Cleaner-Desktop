import os

def remove_temp_files(temp_dir):
    for root, dirs, files in os.walk(temp_dir):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                os.remove(file_path)
                print(f"Removed: {file_path}")
            except PermissionError:
                print(f"Permission denied (file in use or locked): {file_path}")
            except Exception as e:
                print(f"Error: ", str(e))


temp_dir = r"C:\Users\Markus\AppData\Local\Temp"
remove_temp_files(temp_dir)
