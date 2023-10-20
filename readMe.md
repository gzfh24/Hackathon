curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=7cd68b30da0c423dabba304bc46ac8ea&client_secret=e3903bf524744be4835f818adf5f64bc"


//this is the fetch if need new auth

fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "grant_type=client_credentials&client_id=7cd68b30da0c423dabba304bc46ac8ea&client_secret=e3903bf524744be4835f818adf5f64bc"
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error))



{
    "access_token": "BQDy0htm5Z9qIH5qcsZDfnzxMAKTnzhf548gZiJ_3cEY6fdG3vqAVkoE0-DzXdLhzKFXnVf_IesKAeNwJdaQqcuwNE-SoU2rlcy2snoZl5VC6NHnFyc",
    "token_type": "Bearer",
    "expires_in": 3600
}


"Authorization: Bearer  BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11"

responce.artists.items[0].data.uri

{"query":"drake","artists":
  {"totalCount":16,"items":[
  
    {"data":{"uri":"spotify:artist:3TVXtAsR1Inumwj472S9r4","profile":{"name":"Drake"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/ab6761610000e5eb4293385d324db8558179afd9","width":640,"height":640},{"url":"https:\/\/i.scdn.co\/image\/ab6761610000f1784293385d324db8558179afd9","width":160,"height":160},{"url":"https:\/\/i.scdn.co\/image\/ab676161000051744293385d324db8558179afd9","width":320,"height":320}]}}}},

  {"data":{"uri":"spotify:artist:0p4ViyfJUTW0IT4SCBLexf","profile":{"name":"Drakeo the Ruler"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/ab6761610000e5eba603aef1d62687aa6af6f01f","width":640,"height":640},{"url":"https:\/\/i.scdn.co\/image\/ab6761610000f178a603aef1d62687aa6af6f01f","width":160,"height":160},{"url":"https:\/\/i.scdn.co\/image\/ab67616100005174a603aef1d62687aa6af6f01f","width":320,"height":320}]}}}},
  
  {"data":{"uri":"spotify:artist:29ijED2bnnprp2TciAK1aO","profile":{"name":"Drake White"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/ab6761610000e5ebfcdf7ed1c10fd9f03bd2e14e","width":640,"height":640},{"url":"https:\/\/i.scdn.co\/image\/ab6761610000f178fcdf7ed1c10fd9f03bd2e14e","width":160,"height":160},{"url":"https:\/\/i.scdn.co\/image\/ab67616100005174fcdf7ed1c10fd9f03bd2e14e","width":320,"height":320}]}}}},
  
  {"data":{"uri":"spotify:artist:1McMsnEElThX1knmY4oliG","profile":{"name":"Olivia Rodrigo"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/ab6761610000e5ebe03a98785f3658f0b6461ec4","width":640,"height":640},{"url":"https:\/\/i.scdn.co\/image\/ab6761610000f178e03a98785f3658f0b6461ec4","width":160,"height":160},{"url":"https:\/\/i.scdn.co\/image\/ab67616100005174e03a98785f3658f0b6461ec4","width":320,"height":320}]}}}},{"data":{"uri":"spotify:artist:4mskfuiHWZ3nX3qAdeaGiR","profile":{"name":"Drake Milligan"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/ab6761610000e5eb1ccd6a44555f49f2ecec8421","width":640,"height":640},{"url":"https:\/\/i.scdn.co\/image\/ab6761610000f1781ccd6a44555f49f2ecec8421","width":160,"height":160},{"url":"https:\/\/i.scdn.co\/image\/ab676161000051741ccd6a44555f49f2ecec8421","width":320,"height":320}]}}}},{"data":{"uri":"spotify:artist:06HL4z0CvFAxyc27GXpf02","profile":{"name":"Taylor Swift"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/ab6761610000e5eb6a224073987b930f99adc706","width":640,"height":640},{"url":"https:\/\/i.scdn.co\/image\/ab6761610000f1786a224073987b930f99adc706","width":160,"height":160},{"url":"https:\/\/i.scdn.co\/image\/ab676161000051746a224073987b930f99adc706","width":320,"height":320}]}}}},{"data":{"uri":"spotify:artist:03ilIKH0i08IxmjKcn63ne","profile":{"name":"Drake Bell"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/ab6761610000e5ebf022697d475649654541eecc","width":640,"height":640},{"url":"https:\/\/i.scdn.co\/image\/ab6761610000f178f022697d475649654541eecc","width":160,"height":160},{"url":"https:\/\/i.scdn.co\/image\/ab67616100005174f022697d475649654541eecc","width":320,"height":320}]}}}},{"data":{"uri":"spotify:artist:21J0tBQND017hkwhynSLX1","profile":{"name":"Drake Money"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/ab67616d0000b273e9ee95062984327f061d23d1","width":640,"height":640},{"url":"https:\/\/i.scdn.co\/image\/ab67616d00004851e9ee95062984327f061d23d1","width":64,"height":64},{"url":"https:\/\/i.scdn.co\/image\/ab67616d00001e02e9ee95062984327f061d23d1","width":300,"height":300}]}}}},{"data":{"uri":"spotify:artist:5c3GLXai8YOMid29ZEuR9y","profile":{"name":"Nick Drake"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/087fb05851e498c2791ca99000acf35b0fd49f19","width":640,"height":950},{"url":"https:\/\/i.scdn.co\/image\/267080662cf3c019ea8020a4e0e8dd5a7be4d909","width":64,"height":95},{"url":"https:\/\/i.scdn.co\/image\/9a74a7d885abe5da94ac812546d0146cfe4a1ceb","width":200,"height":297},{"url":"https:\/\/i.scdn.co\/image\/d364b498f85ae764cd278fbba9a8ed7f00c3e434","width":1000,"height":1484}]}}}},{"data":{"uri":"spotify:artist:12GqGscKJx3aE4t07u7eVZ","profile":{"name":"Peso Pluma"},"visuals":{"avatarImage":{"sources":[{"url":"https:\/\/i.scdn.co\/image\/ab6761610000e5eb730e71d60e047f1061a9e697","width":640,"height":640},{"url":"https:\/\/i.scdn.co\/image\/ab6761610000f178730e71d60e047f1061a9e697","width":160,"height":160},{"url":"https:\/\/i.scdn.co\/image\/ab67616100005174730e71d60e047f1061a9e697","width":320,"height":320}]}}}}],"pagingInfo":{"nextOffset":10,"limit":10}}}