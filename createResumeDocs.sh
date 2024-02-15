pandoc -o temphtml.html -c pdfstyles.css -s resume.md
pandoc -o public/assets/alec_schrader_resume.html resume.md
wkhtmltopdf --enable-local-file-access temphtml.html public/assets/alec_schrader_resume.pdf 
pandoc -o public/assets/alec_schrader_resume.docx --reference-doc=docstyles.docx resume.md
rm temphtml.html