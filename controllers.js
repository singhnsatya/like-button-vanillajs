function likeApi(type) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			type == "ADD_LIKE"
				? resolve({
						success: true,
						msg: "Video Liked",
						data: { type: "LIKE_ADDED" },
				  })
				: resolve({
						success: true,
						msg: "Video Liked",
						data: { type: "LIKE_REMOVED" },
				  });
		}, 2000);
	});
}
