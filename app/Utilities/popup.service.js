angular
    .module('drinkMachine')
    .service('popup', ["$q", function Service($q) {
        var self = this;
        /**
         * Displays an error popup
         * @param {string} popupText 
         */
        function error(popupText) {
            swal({
                title: "Error!",
                type: "error",
                text: popupText,
                timer: 5000
            }).catch(swal.noop);
        }

        /**
         * Displays a success popup
         * @param {string} popupText - The text to display in the success message
         */
        function success(popupText) {
            swal({
                title: "Success!",
                type: "success",
                text: popupText,
                timer: 5000
            }).catch(swal.noop);
        }

        /**
         * Displays a message indicating that the server is not able to be contacted
         */
        function missingServer() {
            swal({
                title: "Error!",
                type: "error",
                text: "The server cannot be contacted. Please wait and try again soon",
            }).catch(swal.noop);
        }

        /**
         * Returns true or false depending on the value sent and shows a popup if neccessary
         * 
         * @param {Object} response - the response object from the http request
         * @param {boolean} showSuccess - A boolean to indicate whether or not to show a success message
         */
        self.alert = function (response, showSuccess) {
            if (response.data == null) {
                //Can't contact server
                missingServer();
                return false;
            } else if (response.data.error != null) {
                //Error message
                error(response.data.error);
                return false;
            } else {
                //Success
                if (showSuccess) {
                    success(response.data.success);
                }
                return true;
            }
        };

        /**
         * Creates a question popup for the user to accept or deny
         * Returns true on accept and false on deny
         * 
         * @param {string} text - The text to show in the question popup
         */
        self.question = function (text) {
            //The promise for waiting for questions
            var defer = $q.defer();
            swal({
                title: text + "?",
                type: "question",
                showCancelButton: true,
                cancelButtonText: "No",
                confirmButtonText: "Yes"
            }).then(function () {
                defer.resolve(true);
            }, function () {
                defer.resolve(false);
            });
            return defer.promise;
        };

        /**
         * Creates a warning popup to let the user know they are doing something wrong
         * 
         * @param {string} text - The text to show in the question popup
         */
        self.warn = function (text) {
            swal({
                title: "Warning",
                text: text,
                type: "warning",
                showCancelButton: false,
                confirmButtonText: "Okay"
            }).catch(swal.noop);
        };

        /**
         * Creates a Error popup if a function errors
         * 
         * @param {string} text - The text to show in the error popup
         */
        self.error = function (text) {
            swal({
                title: "Error",
                text: text,
                type: "error",
                showCancelButton: false,
                confirmButtonText: "Okay"
            }).catch(swal.noop);
        };
    }]);