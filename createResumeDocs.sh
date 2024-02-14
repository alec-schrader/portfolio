pandoc -o public/assets/alec_schrader_resume.html -c resume-css-stylesheet.css resume.md
wkhtmltopdf public/assets/alec_schrader_resume.html public/assets/alec_schrader_resume.pdf 
pandoc -o public/assets/alec_schrader_resume.docx --reference-doc=custom-reference.docx resume.md
