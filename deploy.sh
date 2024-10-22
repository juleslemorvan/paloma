#!/bin/bash

npm run build

aws s3  sync ./out s3://palomaspirits.com/ --delete 

aws cloudfront create-invalidation --distribution-id E35LYOKM0SC5PB --paths "/*"

