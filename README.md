# kohacktive

to get up and running
  create sendgrid account and get api key
  create env file with api key

npm install

npm start


TODO

comprehensive test suite

more error checking/form validation

add a queue (rabbitmq, amazonsqs)

create worker to pull items off queue

  if one mailing service is down/many errors, switch to other
  
more robust error handling for requests to mail services

expand messaging to allow for attachments, multiple recipients b/cc
