var converter = new showdown.Converter();
var xhr = new XMLHttpRequest();
const params = new URLSearchParams(window.location.search);
const brand = params.get('brand')
const id = params.get('id')
// Sử dụng XMLHttpRequest để tải nội dung của file Markdown
xhr.open('GET', `../data/new_${brand}.md`);
xhr.onload = function() {
    // Render nội dung của file Markdown sang HTML và hiển thị lên trang web
    var markdownContent = xhr.responseText;
    var htmlContent = converter.makeHtml(markdownContent);
    document.getElementById('news-car-detail').innerHTML = htmlContent;

    // Tìm tất cả các thẻ h4 trong nội dung và tạo mục lục cho chúng
    const toc = document.getElementById('content-list-toc');
    const headers = document.querySelectorAll('h4');
    const tocList = document.createElement('ol');

    headers.forEach((header) => {
        const text = header.textContent;
        const id = text.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
        header.setAttribute('id', id);

        const anchor = document.createElement('a');
        anchor.textContent = text;
        anchor.href = '#' + id;

        const listItem = document.createElement('li');
        listItem.appendChild(anchor);
        tocList.appendChild(listItem);
    });

    toc.appendChild(tocList);
    if(id!==null) {
        document.getElementById(id).scrollIntoView()
    }
};
xhr.send();