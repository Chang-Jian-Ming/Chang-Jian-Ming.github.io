# Reference: https://realpython.com/creating-modifying-pdf/#reader-comments

from os import listdir, curdir
from PyPDF2 import PdfFileReader, PdfFileMerger, PdfFileWriter


def read(target_pdf_path):
    reader = PdfFileReader(str(target_pdf_path))
    return reader.getNumPages()


def merge():
    '''DESCRIPTION

        Function merges the pdf files in merge_files folder to form a new pdf file. 
        Order of merger will be based on ascending order of the name of the files. 
        The output pdf file will be stored as merged_file.pdf in the same directory as this script. 
        Existing merged_file.pdf will be replaced.
    '''    
    file_directory = curdir +  "\\merge_files"
    merger = PdfFileMerger()

    for pdf_file in listdir(file_directory):
        if pdf_file.endswith('.pdf'):
            merger.append(file_directory + "\\" + pdf_file)

    output_file = open("merged_file.pdf", "wb")
    merger.write(output_file)


def extract_pages(target_pdf_path, start, end):
    '''DESCRIPTION

        Extract the respective pages in the pdf file to form a new pdf file
        Output pdf file will be stored as extracted_file.pdf in the same directory as this script
        Existing extracted_file.pdf will be replaced

    Args:
        target_pdf_path: Absolute/relative file path to the intended PDF file
        start: First page of intended extraction
        end: Last page of intended extraction

    Raises:
        ValueError: end value is smaller than start value
    '''
    if end < start:
        raise ValueError("End page must be greater than start page")

    reader = PdfFileReader(str(target_pdf_path))
    writer = PdfFileWriter()

    for page in range(start - 1, end):
        current_page = reader.getPage(page)
        writer.addPage(current_page)

    output_file = open("extracted_file.pdf", "wb")
    writer.write(output_file)


def encrypt(target_pdf_path, user_pwd, owner_pwd=""):
    '''DESCRIPTION
    Encrypt the target file with the respective password
    Encrypted output PDF will be stored as encrypted_file.pdf in the same directory as this script
    Existing encrypted_file.pdf will be replaced

    user_pwd sets the user password. This allows for opening and reading the PDF file.
    owner_pwd sets the owner password. This allows for opening the PDF without any restrictions,
        including editing.

    Args:
        target_pdf_path: Absolute/relative file path to the intended PDF file
        user_pwd: Sets the user password for encryption
        owner_pwd: Sets the owner password for encryption
    '''
    reader = PdfFileReader(str(target_pdf_path))
    writer = PdfFileWriter()
    writer.appendPagesFromReader(reader)

    if owner_pwd == "":
        writer.encrypt(user_pwd=user_pwd)
    else:
        writer.encrypt(user_pwd=user_pwd, owner_pwd=owner_pwd)

    output_file = open("encrypted_file.pdf", "wb")
    writer.write(output_file)


if __name__ == "__main__":
    PDF_PATH = "test_file.pdf"
    # Will merge the files in 'merge_files' folder based on naming
    help(merge)
    merge()

    # Will extract the required pages in PDF file
    help(extract_pages)
    extract_pages(PDF_PATH, 2, 2)

    # Will encrypt the PDF files with password
    help(encrypt)
    encrypt(PDF_PATH, 'test')
