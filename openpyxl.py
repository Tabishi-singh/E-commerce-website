import openpyxl
import os

# File for storing data
FILE_NAME = "login_data.xlsx"

def initialize_excel_file():
    if not os.path.exists(FILE_NAME):
        wb = openpyxl.Workbook()
        sheet = wb.active
        sheet.title = "Login Data"
        sheet.append(["Username", "Password"])  # Create headers
        wb.save(FILE_NAME)

def save_login_data(username, password):
    wb = openpyxl.load_workbook(FILE_NAME)
    sheet = wb["Login Data"]
    sheet.append([username, password])  # Append new login data
    wb.save(FILE_NAME)

# Example usage
initialize_excel_file()

# Simulate login data
username = "example_user"
password = "example_password"

# Save the login data
save_login_data(username, password)
print("Login data saved successfully!")
