$(document).ready(function() {
    // MODAL
    var modalText = {
        venndy: {
            title: 'Venndy',
            tag: 'SOCIAL SHOPPING NETWORKING',
            detail: 'VENNDY is all about collection, connection, and collaboration for and between people. VENNDY is a user-generated content platform that focuses on contextual connectivity. It offers a new way to share the right content in the right context with the right audience. Using its proprietary algorithm, VENNDY offers users a multi-layered connectivity system which consolidates the best of stories, items, and people to follow',
            link: 'https://www.venndy.com'
        },
        indivisualcollective: {
            title: 'Indivisual Collective',
            tag: '',
            detail: 'The Indivisual Collective is a small independent clothing project focused solely on each artist&amp;#39;s vision for each individual design.',
            link: 'http://www.indivisualcollective.com'
        },
        ecomhunt: {
            title: 'Ecomhunt - Find Winning Products To Sell On Your Online Store!',
            tag: '',
            detail: 'Ecomhunt allows you to easily find products that are already proven to sell or how we like to call them Winning products! - in only a few clicks - it`s time to stop guessing, start selling!',
            link: 'https://ecomhunt.com'
        },
        dhanuka: {
            title: 'Dhanuka FL App',
            tag: '',
            detail: 'Dhanuka FL App is an application for Dhanuka Front Lines team members for Complete Sales process. This is a tool to update ourselves & do smart selling with unmatched Service level. No General information will be available',
            link: 'https://play.google.com/store/apps/details?id=dhanuka.kohinoor&hl=en_IN'
        },
        dogtube: {
            title: 'Dogtube &#8211; Everything dogs',
            tag: 'YOUTUBE TRANNING FUNNY VIDEO',
            detail: '',
            link: 'https://www.dogtube.us'
        },
        tftus: {
            title: 'Think Future Technologies',
            tag: '',
            detail: 'Think Future Technologies is a leading provider of Technology talent and services for your Enterprise and your Product. Headquartered in Gurgaon, India with delivery centers in Bhopal and Bangalore, we service our customers in varied global geographies including North America, Middle East, Europe, and India',
            link: 'https://www.tftus.com'
        },
        monarchymedallions: {
            title: 'Monarchy Floor Medallions, London, UK',
            tag: '',
            detail: 'Monarchy Floor Medallions Offers a Beautiful Selection of Decorative Tiles, Marble tile, flooring inlays in London, UK.',
            link: 'http://monarchymedallions.com'
        },
        purafem: {
            title: 'Pueraria Mirifica | The Natural Way by PURAFEM',
            tag: '',
            detail: 'PURAFEM premium health food supplements and beauty cosmetic products with natural extracts. Shop for pueraria mirifica, argireline, anti aging and skin brightening products. Claim your free gift today..',
            link: 'https://www.purafem.com'
        },
        ccnet: {
            title: 'CC Net',
            tag: '',
            detail: 'CC Net | Platform voor organisatiebeheersing en projecten',
            link: 'https://www.ccnet.be'
        },
        annarborapartments: {
            title: 'Ann Arbor Apartments for Rent | CMB Management in Michigan',
            tag: '',
            detail: 'Find the perfect student apartments in Ann Arbor by exploring our campus locations with 18 different floor plans, studio, 1, 2 &amp; 3 bedroom apartment homes.',
            link: 'https://annarborapartments.net'
        },
        thetrainingdesk: {
            title: 'The Training Desk',
            tag: '',
            detail: 'BRIDGE is a retina multi-purpose WordPress theme built on very powerful and flexible framework by QODE.',
            link: 'http://thetrainingdesk.com'
        },
        kavisammelankavi: {
            title: 'Kavi Sammelan- Hasya Kavi Sammelan Organizer, Kavi Sammelan Organizers in India',
            tag: '',
            detail: 'kavi sammelan, kavi sammelan organizer, kavi sammelan organizers, hasya kavisammelan organizer, hasyakavisammelan organizers" /><meta name="description" content="Kavi Sammelan- Hasya Kavi sammelan organizer, Kavi sammelan organizers in India. To make us organize a Kavi Sammelan for you, all you need to do is contact us.',
            link: 'http://thetrainingdesk.com'
        },
        ibta:{
            title: '',
            tag: '',
            detail: '',
            link: ''
        },
        medtronic: {
            title: 'All ;Healthcare Professionals;Patients & Caregivers',
            tag: 'Healthcare Professionals, Patients & Caregivers, medical-specialties',
            detail: 'Medtronic is a global leader in medical technology, services, and solutions. We collaborate with others to take on healthcare`s greatest challenges. See how.',
            link: 'https://www.medtronic.com'
        },
        pim: {
			title: 'mecApp',
            tag: '',
            detail: '',
            link: 'http://uat.us.connect.medtronic.com/apps/portal/mecApp'
		},
    };

    $('#gallery .button').on('click', function() {
        fillModal(this.id);
        $('.modal-wrap').addClass('visible');
    });

    $('.close').on('click', function() {
        $('.modal-wrap, #modal .button').removeClass('visible');
    });

    $('.mask').on('click', function() {
        $('.modal-wrap, #modal .button').removeClass('visible');
    });

    var carousel = $('#carousel'),
        slideWidth = 700,
        threshold = slideWidth / 3,
        dragStart,
        dragEnd;

    setDimensions();

    $('#next').click(function() {
        shiftSlide(-1);
    });
    $('#prev').click(function() {
        shiftSlide(1);
    });

    carousel.on('mousedown', function() {
        if (carousel.hasClass('transition')) return;
        dragStart = event.pageX;
        $(this).on('mousemove', function() {
            dragEnd = event.pageX;
            $(this).css('transform', 'translateX(' + dragPos() + 'px)');
        });
        $(document).on('mouseup', function() {
            if (dragPos() > threshold) {
                return shiftSlide(1);
            }
            if (dragPos() < -threshold) {
                return shiftSlide(-1);
            }
            shiftSlide(0);
        });
    });

    function setDimensions() {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            slideWidth = $(window).innerWidth();
        }
        $('.carousel-wrap, .slide').css('width', slideWidth);
        $('.modal').css('max-width', slideWidth);
        $('#carousel').css('left', slideWidth * -1);
    }

    function dragPos() {
        return dragEnd - dragStart;
    }

    function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup');
        carousel
            .off('mousemove')
            .addClass('transition')
            .css('transform', 'translateX(' + direction * slideWidth + 'px)');
        setTimeout(function() {
            if (direction === 1) {
                $('.slide:first').before($('.slide:last'));
            } else if (direction === -1) {
                $('.slide:last').after($('.slide:first'));
            }
            carousel.removeClass('transition');
            carousel.css('transform', 'translateX(0px)');
        }, 700);
    }

    function fillModal(id) {
        $('#modal .title').text(modalText[id].title);
        $('#modal .detail').text(modalText[id].detail);
        $('#modal .tag').text(modalText[id].tag);
        if (modalText[id].link)
            $('#modal .button')
            .addClass('visible')
            .parent()
            .attr('href', modalText[id].link);

        $.each($('#modal li'), function(index, value) {
            $(this).text(modalText[id].bullets[index]);
        });
        $.each($('#modal .slide'), function(index, value) {
            $(this).css({
                background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
                backgroundSize: 'cover'
            });
        });
    }
});