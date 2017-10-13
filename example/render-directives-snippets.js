<template>
  <ul v-if="items.length">
    <li v-for="item in items">{{ item.name }}</li>
  </ul>
  <p v-else>No items found.</p>
</template>

render: function (createElement) {
  if (this.items.length) {
    return createElement('ul', this.items.map(function (item) {
      return createElement('li', item.name)
    }))
  } else {
    return createElement('p', 'No items found.')
  }
}

<template>
    <ul>
        <li v-for="pea of pod"></li>
    </ul>
</template>

render(h) {
     return h('ul', this.pod.map(pea =>h('li', pea.name)));
 }

 <template>
     <div>
         <p v-if="show">Hello Wolrd!</p>
         <p v-else>No Content</p>
     </div>
 </template>

render(h) {
   if (this.show) {
       return h('p', 'Hello world!')
   } else {
       return h('p', 'No content')
   }
}


render(h) {
    return h('input', {
        domProps: {
            value: this.myBoundProperty
        },
        on: {
            input: e => {
                this.myBoundProperty = e.target.value
            }
        }
    })
}

<template>
    <input :value="myBoundProperty" @input="myBoundProperty = $event.target.value"/>
</template>
// OR
<template>
    <input v-model="myBoundProperty"/>
</template>

render(h) {
    return h('div', {
      attrs: {
        // <div :id="myCustomId">
        id: this.myCustomId
      },

      props: {
        // <div :someProp="someonePutSomethingHere">
        someProp: this.someonePutSomethingHere
      },

      domProps: {
         // <div :value="somethingElse">
        value: this.somethingElse
      }
    });
}

render(h) {
    return h('div', {
        // "class" is a reserved keyword in JS, so you have to quote it.
        'class': {
            myClass: true,
            theirClass: false
        },
        style: {
            backgroundColor: 'green'
        }
    });
}
