fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`).then((res)=> {
            const response = res.json().then((data)=> {
                const token = data.access_token 
                fetch(`https://graph.instagram.com/me/media?fields=id&access_token=${token}`).then((idsres)=> {
                    idsres.json().then((idsjson)=> {
                        const ids = idsjson.data 
                        for (var i =0; i < 5 ; i++) {
                            fetch(`https://graph.instagram.com/${ids[i].id}?fields=media_url,permalink,media_type&access_token=${token}`).then((media)=> {
                                media.json().then((mediaData)=> {
                                    if(mediaData.media_type!="VIDEO") {
                                        const media = {
                                            link: mediaData.permalink,
                                            image: mediaData.media_url,
                                        }
                                        setInsta(insta.concat(media))
                                    }
                                })
                            })
                        } 
                        console.log(insta)
                        
                    })
                }) 
            })
})