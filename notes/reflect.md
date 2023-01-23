const plane={
color:'red'
}
Reflect.defineMetada('note','value for note',plane) // this is like adding a new property to plane objc
const plane={
color:'red'
note:'value for note'
}
except this property will never show up anywhere. Only Reflect can access.
`Reflect.getMetada('note',plane)`
metadata is totally invisible. we can even add metadata to "color" property.
`Reflect.defineMetadata('note','hi there',plane,'color')`
const note=Reflect.getMetada('note',plane,'color')

it looks like this. plane:{color:[red,metadata:{note:'hi there'}]}
