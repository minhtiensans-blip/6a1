        function showInfo(name, imgSrc, description) {
            document.getElementById('modal-name').innerText = name;
            document.getElementById('modal-img').src = imgSrc;
            document.getElementById('modal-desc').innerText = description;
            document.getElementById('infoModal').style.display = 'block';
        }

        function closeInfo() {
            document.getElementById('infoModal').style.display = 'none';
        }

        window.onclick = function(event) {
            var modal = document.getElementById('infoModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }