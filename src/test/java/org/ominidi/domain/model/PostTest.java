package org.ominidi.domain.model;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class PostTest {

    @Test
    public void itIsAnImmutablePost() {
        String id = "221946658231380_221946658231380";
        String objectId = "221946658231380";
        String createdTime = "2016-12-07T18:56:42+0000";
        String type = "photo";
        String link = "https://www.facebook.com/ominidi.org/photos/a.221947308231315.1073741828.221685698257476/221946658231380/?type=3";
        String permalinkUrl = "https://www.facebook.com/ominidi.org/posts/221946658231380:0";
        String picture = "https://scontent.xx.fbcdn.net/v/t1.0-0/p130x130/15350731_221946658231380_7655843372792046975_n.jpg";
        String fullPicture = "https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/15350731_221946658231380_7655843372792046975_n.jpg?oh=fff641748cce57b36d1db68ce74ced02&oe=58BDC3C6";
        String message = "this is a message";

        Post post = new Post(id, objectId, createdTime, type, link, permalinkUrl, picture, fullPicture, message);

        assertEquals(id, post.getId());
        assertEquals(objectId, post.getObjectId());
        assertEquals(createdTime, post.getCreatedTime());
        assertEquals(type, post.getType());
        assertEquals(link, post.getLink());
        assertEquals(permalinkUrl, post.getPermalinkUrl());
        assertEquals(picture, post.getPicture());
        assertEquals(fullPicture, post.getFullPicture());
        assertEquals(message, post.getMessage());
    }
}
