

##### Create
```shell
curl -s -X PUT -H "Content-Type: application/json" \
    -d '{"system": "baz", "code": 1001, "severity": "crit", "error": "core dump"}' \
    http://0.0.0.0:3001/defect | jq .
```

##### Get All
```shell
curl -s http://0.0.0.0:3001/defect
```

##### Delete
```shell
curl -s -X DELETE \
    http://0.0.0.0:3001/defect/$(curl -s http://0.0.0.0:3001/defect | jq -r '.[length -1].id') | jq .
```

##### Query
```shell
curl -s -X POST -H "Content-Type: application/json" \
    -d '{"after": 0, "before": '$(date +%s)', "system": "foo", "error": "%system%"}' \
    http://0.0.0.0:3001/defect | jq .
```