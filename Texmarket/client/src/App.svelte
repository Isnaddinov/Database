<script lang="ts">
    import axios from "axios";
    import { each } from "svelte/internal";

    let inputName: HTMLInputElement;
    let inputImage: HTMLInputElement;

    type Category = {
        id: number;
        name: string;
        image: string;
    };
    let categories: Category[] = [];
    function getCategory() {
        axios.get("http://localhost:9090/categories").then((response) => {
            categories = response.data;
        });
    }
         getCategory()
    function createCategory() {
        const category = {
            name: inputName.value,
            image: inputImage.value,
        };

        axios
            .post("http://localhost:9090/categories", category)
            .then((response) => {
                alert(response.data.message);
                getCategory();
            })
            .catch((error) => {
                console.error(error.message);
            });
        getCategory();
    }

    function deleteCategory(id: number) {
        axios
            .delete("http://localhost:9090/categories/" + id)
            .then((response) => {
                alert(response.data.message);
                getCategory();
            })
            .catch((error) => {
                console.error(error.message);
            });
        getCategory();
    }

    getCategory();
</script>

<div class="wrapper">
    <!-- HEDAER - START -->
    <header class="header">
        <div class="newcat">
            <input
                bind:this={inputName}
                type="text"
                placeholder="Catigory Name"
            />
            <input
                bind:this={inputImage}
                type="text"
                placeholder="Catigory Image url"
            />
            <button on:click={createCategory}>New Catigory</button>
        </div>
        <div class="contenier">
            <div class="header__logo logo">
                <div class="logo__left"><a href="#">MOODY STUDIO</a></div>
                <div class="logo__right"><a href="#" /></div>
            </div>
            <ul class="header__navbar nav">
                <li class="nav__item1">
                    <a href="newcatigory.html">NEW CATIGORY</a>
                </li>
                <li class="nav__item"><a href="#">STORE</a></li>
                <li class="nav__item"><a href="#">ACCESSORIES</a></li>
                <li class="nav__item"><a href="#">BRAND</a></li>
                <li class="nav__item"><a href="#">PAGES</a></li>
                <li class="nav__item"><a href="#">ABOUT US</a></li>
                <li class="nav__item"><a href="#">NEWS</a></li>
                <li class="nav__item"><a href="#"> CONTACT US </a></li>
            </ul>
            <ul class="nav__bottom">
                <li class="nav__bottom__item">
                    <img
                        src="/image/Free shipping.png"
                        alt="shipping"
                        class="nav__bottom__img1"
                    /><a href="#">FREE SHIPPING</a>
                </li>
                <li class="nav__bottom__item">
                    <img
                        src="/image/Moneyback.png"
                        alt="support"
                        class="nav__bottom__img"
                    /><a href="#">100% MONEY BACK</a>
                </li>
                <li class="nav__bottom__item">
                    <img
                        src="/image/support.png"
                        alt="support"
                        class="nav__bottom__img"
                    /><a href="#">SUPPORT 24/7</a>
                </li>
                <nav__bottom__list />
            </ul>
        </div>
        <div class="header__center center">
            <div class="contenier">
                <img
                    src="/image/cyber-computer-shop-5.jpg"
                    alt="chair"
                    class="center__img"
                />
                <div class="center__desc">
                    <h3 class="subtitle">HOT DEALS THIS WEEK</h3>
                    <h2 class="title">SALE UP 50% <br /> MODERN FURNITURE</h2>
                    <button class="center__desc__btn"> VIEW NOW </button>
                </div>
            </div>
        </div>
    </header>
    <!-- HEADER - END -->

    <!-- MAIN - START -->
    <main class="main">
        <div class="contenier">
            <h1 class="cath1">CATEGORIES</h1>
            <main class="main__top">
                {#each categories as categor}
                    
                    <section class="chair">
                        <div class="chair__desc">
                            <button class="chair__desc__btn"
                                >{categor.name}</button
                            >
                            <button class="btn_Cat" on:click={() => deleteCategory(categor.id)}><i class="bi bi-x-circle"></i></button>
                        <img
                            src={categor.image}
                            class="chair__img"
                            alt="rating-1dasdf"
                        />
                        
                        </div>
                    </section>
                {/each}
            </main>

            <main class="main__bottom">
                <div class="main__center">

                    <div class="contenier">
                        <h1 class="cath2">HOME PRODUCTS</h1>
                        <div class="main__center__desc">
                            <h2 class="main__center__desc__title">
                                BEDSHEET Lights
                            </h2>
                            <h3 class="main__center__desc__subtitle">
                                $50.00 <span><del>$220.00</del></span>
                            </h3>
                            <p class="main__center__desc__p">
                                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                                elit, sed do eiusmod tempor.
                            </p>
                            <button class="main__center__desc__btn">
                                VIEW DETAILS
                            </button>
                        </div>
                    </div>
                </div>
                <div class="main__bottom__title">
                    <h2>TOP RATING</h2>
                </div>
                <div class="main__bottom__ratings">
                    <section class="rating">
                        <img
                            class="rating__img"
                            src="/image/rating-1.png"
                            alt="rating-1"
                        />

                        <div class="rating__desc">
                            <h2 class="rating__title">
                                <a href="#">Tray <br /> with Foot</a>
                            </h2>
                            <ul class="rating__rating">
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                            </ul>
                            <p class="rating__price">30$</p>
                        </div>
                    </section>
                    <section class="rating">
                        <img
                            class="rating__img"
                            src="/image/rating-2.png"
                            alt="rating-2"
                        />
                        <div class="rating__desc">
                            <h2 class="rating__title">
                                <a href="#">Twil <br /> Seat Cushion</a>
                            </h2>
                            <ul class="rating__rating">
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                            </ul>
                            <p class="rating__price">30$</p>
                        </div>
                    </section>
                    <section class="rating">
                        <img
                            class="rating__img"
                            src="/image/rating-3.png"
                            alt="rating-3"
                        />
                        <div class="rating__desc">
                            <h2 class="rating__title">
                                <a href="#"
                                    >Fluted Beverage <br />
                                    Glass</a
                                >
                            </h2>
                            <ul class="rating__rating">
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                            </ul>
                            <p class="rating__price">30$</p>
                        </div>
                    </section>
                    <section class="rating">
                        <img
                            class="rating__img"
                            src="/image/rating-4.png"
                            alt="rating-4"
                        />
                        <div class="rating__desc">
                            <h2 class="rating__title">
                                <a href="#"
                                    >Ceramic <br />
                                    Egg Cup</a
                                >
                            </h2>
                            <ul class="rating__rating">
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                            </ul>
                            <p class="rating__price">30$</p>
                        </div>
                    </section>
                    <section class="rating">
                        <img
                            class="rating__img"
                            src="/image/rating-5.png"
                            alt="rating-5"
                        />
                        <div class="rating__desc">
                            <h2 class="rating__title">
                                <a href="#"
                                    >Small <br />
                                    Bamboo Box</a
                                >
                            </h2>
                            <ul class="rating__rating">
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                            </ul>
                            <p class="rating__price">30$</p>
                        </div>
                    </section>
                    <section class="rating">
                        <img
                            class="rating__img"
                            src="/image/rating-6.png"
                            alt="rating-6"
                        />
                        <div class="rating__desc">
                            <h2 class="rating__title">
                                <a href="#"
                                    >Metal Cutlery <br />
                                    Basket</a
                                >
                            </h2>
                            <ul class="rating__rating">
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                            </ul>
                            <p class="rating__price">30$</p>
                        </div>
                    </section>
                    <section class="rating">
                        <img
                            class="rating__img"
                            src="/image/rating-7.png"
                            alt="rating-7"
                        />
                        <div class="rating__desc">
                            <h2 class="rating__title">
                                <a href="#"
                                    >4-pack Ceramic
                                    <br /> Cups</a
                                >
                            </h2>
                            <ul class="rating__rating">
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                            </ul>
                            <p class="rating__price">30$</p>
                        </div>
                    </section>
                    <section class="rating">
                        <img
                            class="rating__img"
                            src="/image/rating-8.png"
                            alt="rating-8"
                        />
                        <div class="rating__desc">
                            <h2 class="rating__title">
                                <a href="#"
                                    >2-pack Linen <br />
                                    Napkins</a
                                >
                            </h2>
                            <ul class="rating__rating">
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                            </ul>
                            <p class="rating__price">30$</p>
                        </div>
                    </section>
                    <section class="rating">
                        <img
                            class="rating__img"
                            src="/image/rating-9.png"
                            alt="rating-9"
                        />
                        <div class="rating__desc">
                            <h2 class="rating__title">
                                <a href="#"
                                    >Glazed Stoneware
                                    <br /> Plate</a
                                >
                            </h2>
                            <ul class="rating__rating">
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                                <li class="rating__rating__item">
                                    <img src="/image/star-outline.svg" alt="" />
                                </li>
                            </ul>
                            <p class="rating__price">30$</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    </main>
    <!-- MAIN - END -->

    <!-- FOOTER - START -->
    <div class="contenier">
        <footer class="footer">
            <div class="footer__desc">
                <div class="footer__desc__title">
                    SING UP FOR THE NEWSLETTER
                </div>
                <div class="footer__dec__p">
                    Subscribe for the latest stories and promotions
                </div>
            </div>
            <form action="footer__mail">
                <input
                    type="text"
                    name="mail"
                    id="mail"
                    placeholder="Enter your e-mail address"
                />
                <div class="label">
                    <label for="mail"><ion-icon name="mail-outline" /></label>
                </div>
            </form>
        </footer>
    </div>
    <!-- FOOTER - END -->
</div>
