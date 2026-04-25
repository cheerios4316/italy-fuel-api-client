# Fuel ID explanation

The items obtained by calling the fuel list endpoint look like this:

```ts
{ id: '2-x', description: 'Gasolio' },
{ id: '2-1', description: 'Gasolio (Self)' },
{ id: '2-0', description: 'Gasolio (Servito)' },
```

Theh textual ID is composed of two parts separated by a dash.\
The left part of the ID represents the fuel type, and the right part of the ID represents the service type.

| Service type | Meaning            |
| ------------ | ------------------ |
| x            | Generic            |
| 0            | Served by operator |
| 1            | Self service       |

The fuels list in search results look like this:

```ts
{
id: 1234,
price: 2.259,
name: 'Gasolio',
fuelId: 2,
isSelf: false
},
```

The `fuelId` property of these objects represents the left section of the textual ID returned by the fuels list endpoint.