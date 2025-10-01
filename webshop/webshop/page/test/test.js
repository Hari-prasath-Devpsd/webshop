frappe.pages['test'].on_page_load = function(wrapper) {
    const page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Website Items',
        single_column: true
    });

    $(document).ready(function() {
        $('.navbar.navbar-expand').css('display', 'none');
    });
    $("<style>")
    .prop("type", "text/css")
    .html(`
        img{
        height:40px;
        }
        
    `)
    .appendTo("head");
    const head = document.head;

    const assets = [
        { tag: 'meta', attrs: { charset: 'UTF-8' } },
        { tag: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap' } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'http://192.168.1.23:8000/psd/assets/css/style.css' } }
    ];

    assets.forEach(asset => {
        const el = document.createElement(asset.tag);
        Object.entries(asset.attrs).forEach(([key, value]) => el.setAttribute(key, value));
        head.appendChild(el);
    });

    // Inject your header HTML
    $(wrapper).html(`
        <div class="top-bar d-flex justify-content-between align-items-center">
            <div class="container-fluid">
                <div class="d-flex justify-content-lg-between justify-content-center align-items-center">
                    <div class="text-center">
                        <span class="mx-1"><i class="fa fa-phone"></i> 0844 940 9410</span> |
                        <span class="mx-1"><i class="fa fa-envelope"></i> info@PSDsolutions.co.uk</span>
                    </div>
                    <div class="d-lg-block d-none">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-x-twitter"></i></a>
                        <a href="#"><i class="fa fa-user"></i> Hi There! Your Account</a>
                        <a href="#"><i class="fa fa-bolt"></i> Quick Order</a>
                        <a href="#"><i class="fa fa-shopping-bag"></i> £0.00</a>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-white navbar-custom">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold" href="#">
                    <img src="https://tekstag.com/wp-content/uploads/2025/02/logo-tekstag.png" alt="PSD Logo" height="20" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto" id="nav-categories"></ul>
                    <form class="d-flex search-bar w-auto" >
                        <input class="form-control me-2" type="search" placeholder="Search All Categories" />
                        <button class="Search-btn btn-outline-secondary" type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>

        <div class="container my-5">
            <div class="d-flex justify-content-between align-items-center mb-3 gap-3">
            <button class="btn btn-primary ms-2">Add Items</button>
            <div class="d-flex justify-start align-items-center gap-3">
                <input type="text" id="search-input" class="form-control w-50" placeholder="Search">
                <button id="search-btn" class="btn btn-primary ms-2">Search</button>
            </div>
            </div>

            <div class="table-responsive">
                <table class="table table-bordered table-hover" id="items-table">
                <thead class="table-light">
                    <tr >
                    <th style="background-color: #570987 !important; color: white;">Website Item Name</th>
                    <th style="background-color: #570987 !important; color: white;">Item Code</th>
                    <th style="background-color: #570987 !important; color: white;">Item Name</th>
                    <th style="background-color: #570987 !important; color: white;">Item Group</th>
                    <th style="background-color: #570987 !important; color: white;">Stock UOM</th>
                    <th style="background-color: #570987 !important; color: white;">Brand</th>
                    <th style="background-color: #570987 !important; color: white;">Published</th>
                    <th style="background-color: #570987 !important; color: white;">Has Variants</th>
                    </tr>
                </thead>
                <tbody></tbody>
                </table>
            </div>

            <div id="pagination-controls" class="d-flex justify-content-center mt-4"></div>
            </div>


        <div class="footer section-padding ">
        <div class="container">
            <div class="row justify-content-between">
            <!-- Contact Us -->
            <div class="col-md-4 mb-4">
                <a class="fw-bold" href="#">
                <img
                    src="https://tekstag.com/wp-content/uploads/2025/02/logo-tekstag.png"
                    alt="PSD Logo"
                    width="120px"
                    height="60"
                    style="object-fit:contain;"
                />
                </a>
                <!-- <h5>CONTACT US</h5> -->
                <p>
                Need help? Just ask. Contact us on any of the below or via our
                instant chat service:
                </p>
                <p><i class="fas fa-phone-alt"></i> 0844 940 9410</p>
                <p><i class="fas fa-envelope"></i> orders@jklsolutions.co.uk</p>
                <!-- <p><a href="#" class="text-black">See more contact details</a></p> -->
                <div class="d-flex gap-3">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    alt="Visa"
                    width="40"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                    width="40"
                />
                </div>
            </div>
            <!-- Useful Links -->
            <div class="col-md-4 mb-4">
                <div class="footer-link">
                <h5>USEFUL LINKS</h5>
                <a href="#"><i class="fa-solid fa-chevron-right"></i>About us</a>
                <a href="#"
                    ><i class="fa-solid fa-chevron-right"></i>Our Services</a
                >
                <a href="#"
                    ><i class="fa-solid fa-chevron-right"></i>Testimonials</a
                >
                <a href="#"
                    ><i class="fa-solid fa-chevron-right"></i>Contact Us</a
                >
                <a href="#"
                    ><i class="fa-solid fa-chevron-right"></i>Privacy Statement</a
                >
                <a href="#"
                    ><i class="fa-solid fa-chevron-right"></i>Terms And
                    Conditions</a
                >
                </div>
            </div>

            <!-- Logo -->
            <div class="col-md-2 text-start">
                <h5>SOCIAL</h5>

                <!-- <img
                src="https://dummyimage.com/100x50/003366/fff&text=PSD"
                alt="JKL Logo"
                /> -->
                <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-twitter"></i>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- Bottom Bar -->
        <div
        class="footer-bottom d-flex justify-content-center align-items-center px-3"
        >
        <div>
            © 2025 Copyright © tekstag Solutions Ltd 
            <!-- – Registered in England & Wales 06874834 -->
        </div>
        <!-- <div>
                <button class="contact-button">
                    Contact us 
                    <i class="fas fa-envelope"></i>
                    <i class="fas fa-phone"></i>
                    <i class="fas fa-comment-alt"></i>
                </button>
            </div> -->
        </div>
    `);

    function fetchItems(search = '', page = 1, pageSize = 12) {
        frappe.call({
            method: 'webshop.webshop.api.get_website_items',
            args: { search, page, page_size: pageSize },
            callback: function(r) {
                const items = r.message.items;
                const total = r.message.total;
                const currentPage = r.message.page;

                const tbody = $('#items-table tbody');
                tbody.empty();

                if (items.length === 0) {
                    tbody.html('<tr><td colspan="9" class="text-center">No items found.</td></tr>');
                    return;
                }

                items.forEach(item => {
                    tbody.append(`
                        <tr>
                            <td><a href="/${item.route}" target="_blank">${item.web_item_name || ''}</a></td>
                            <td>${item.item_code || ''}</td>
                            <td>${item.item_name || ''}</td>
                            <td>${item.item_group || ''}</td>
                            <td>${item.stock_uom || ''}</td>
                            <td>${item.brand || ''}</td>
                            <td>${item.published ? 'Yes' : 'No'}</td>
                            <td>${item.has_variants ? 'Yes' : 'No'}</td>
                        </tr>
                    `);
                });

                renderPagination(total, currentPage, pageSize, search);
            }
        });
    }


    function renderPagination(total, currentPage, pageSize, search) {
        const totalPages = Math.ceil(total / pageSize);
        const pagination = $('#pagination-controls');
        pagination.empty();

        for (let i = 1; i <= totalPages; i++) {
            pagination.append(`
                <button class="btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-outline-secondary'} mx-1 page-btn" data-page="${i}" data-search="${search}">
                    ${i}
                </button>
            `);
        }
    }

    $(document).on('click', '#search-btn', function() {
        const search = $('#search-input').val();
        fetchItems(search, 1);
    });

    $(document).on('click', '.page-btn', function() {
        const page = $(this).data('page');
        const search = $(this).data('search');
        fetchItems(search, page);
    });

    fetchItems();
};
