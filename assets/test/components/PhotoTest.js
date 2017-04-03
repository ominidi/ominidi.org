import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';
import Photo from '../../js/application/photos/components/Photo';

const data = {
    "created_time": "2016-12-07T18:56:42+0000",
    "type": "photo",
    "message": "Gli astrolopicheco (Australopithecus Dart, 1925) sono un genere estinto di primati della famiglia degli ominidi, che si ritiene appartenente alla linea evolutiva dell'uomo.",
    "object_id": "221946658231380",
    "link": "https://www.facebook.com/ominidi.org/photos/a.221947308231315.1073741828.221685698257476/221946658231380/?type=3",
    "name": "Timeline Photos",
    "picture": "https://scontent.xx.fbcdn.net/v/t1.0-0/p130x130/15350731_221946658231380_7655843372792046975_n.jpg?oh=0f27572980bc08e43bcd209db7ce2aa6&oe=58FC8D39",
    "permalink_url": "https://www.facebook.com/ominidi.org/posts/221946658231380:0",
    "full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/15350731_221946658231380_7655843372792046975_n.jpg?oh=fff641748cce57b36d1db68ce74ced02&oe=58BDC3C6",
    "id": "221685698257476_221946658231380"
};

describe('#Photo', () => {

    it('represent a single photo of the feed', () => {
        const wrapper = shallow(<Photo { ...data }/>);

        assert.equal(wrapper.hasClass('photos__item'), true);
        assert.equal(wrapper.find('.card').length, 1);
        assert.equal(wrapper.find('.card__picture').length, 1);
        assert.equal(wrapper.find('.card__caption').text(), "Title");
    });
});