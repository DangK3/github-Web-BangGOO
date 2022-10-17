/*
Table_1
    CateID = Khoá chính
    Name = Tên
    Name_K_D = Tên không dấu
    Status = Trạng thái ẩn hiện
    Sort = sắp xếp
    ParentID = nào có = 1 là cấp cha còn 0 là cấp con
        trường để seo
    MetaKeyword 
    Metadescriprtioon
    CreateBy
    CreateDate
    UpdateBy 
    UpdatDate

*Luu y:
    CateID là primaryKey set tự độg tăng
    Status set giá trị là 1

Table_2
    ProductID = PrimaryKey
    Name.Name_KD.Status
    Image = src""
    ListImage = (anh nho nho..?)
    Price = Gia niem yet
    PromotionPrice = Gia khuyen mai
    Vat = thue
    Quantify = So luong hang ton kho
    Warranty = Tg Bảo hành
    Hot = sp Hot
    Description = Mô tả sp
    Detail = sp Chi tiết
    Viewcount = Số lượng ng xem
    CateID = khoá ngoại
*/
/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

// window.addEventListener('DOMContentLoaded', event => {

//     // Toggle the side navigation
//     const sidebarToggle = document.body.querySelector('#sidebarToggle');
//     if (sidebarToggle) {
//         // Uncomment Below to persist sidebar toggle between refreshes
//         // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
//         //     document.body.classList.toggle('sb-sidenav-toggled');
//         // }
//         sidebarToggle.addEventListener('click', event => {
//             event.preventDefault();
//             document.body.classList.toggle('sb-sidenav-toggled');
//             localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
//         });
//     }

// });
const layoutLeft = document.querySelector('.layout-left')
const containerBtn = document.querySelector('.container__btn')
const content = document.querySelector('.content__h')

containerBtn.onclick = function(){
    layoutLeft.classList.toggle('hide')
    content.classList.toggle('expand')

}
