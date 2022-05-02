/* contact copy 버튼 */
document.execCommand("copy");
			var button = document.getElementById("email_copy"),
				contentHolder = document.getElementById("email_content");

			button.addEventListener(
				"click",
				function () {
					var range = document.createRange(),
						selection = window.getSelection();

					selection.removeAllRanges();

					range.selectNodeContents(contentHolder);

					selection.addRange(range);

					document.execCommand("copy");

					selection.removeAllRanges();

                    alert('복사되었습니다!')
				},
				false,
			);
