// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract VDOChain {
    struct Video {
        uint256 id;
        address uploader;
        string videoHash;
        string thumbnailHash;
        string detailsHash;
        uint256 likesCount;
        uint256 tipsCount;
        uint256 commentsCount;
        bool isUploaded;
    }

    struct Comment {
        address commenter;
        string comment;
    }

    uint256 public videoCount = 0;
    mapping(uint256 => Video) public videos;
    mapping(uint256 => mapping(address => bool)) likes;
    mapping(uint256 => Comment[]) comments;

    modifier validVideo(uint256 _id) {
        require(videos[_id].isUploaded == true, "Video not found");
        _;
    }

    function uploadVideo(
        string memory _videoHash,
        string memory _thumbnailHash,
        string memory _detailsHash
    ) public {
        videoCount++;
        videos[videoCount] = Video(
            videoCount,
            msg.sender,
            _videoHash,
            _thumbnailHash,
            _detailsHash,
            0,
            0,
            0,
            true
        );
    }

    function likeVideo(uint256 _id) public validVideo(_id) {
        require(!likes[_id][msg.sender], "Video already liked");
        likes[_id][msg.sender] = true;
        videos[_id].likesCount++;
    }

    function isVideoLikedByAddress(uint256 _id) public view returns (bool) {
        return likes[_id][msg.sender];
    }

    function tipVideo(uint256 _id) public validVideo(_id) {
        require(msg.sender != videos[_id].uploader, "Can't tip yourself");
        videos[_id].tipsCount++;
    }

    function commentVideo(uint256 _id, string memory _comment)
        public
        validVideo(_id)
    {
        comments[_id].push(Comment(msg.sender, _comment));
        videos[_id].commentsCount++;
    }

    function getVideoComments(uint256 _id)
        public
        view
        returns (Comment[] memory)
    {
        return comments[_id];
    }
}
