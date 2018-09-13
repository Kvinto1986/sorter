class Sorter {
    constructor() {
        this.arr;
        this.items = [];
        this.func_sort=function (a,b) {
            return a-b;
        }
    }

    add(element) {
        this.items.push(element);

    }

    at(index) {
        return this.items[index];
    }

    get length() {
        return this.items.length;
    }

    toArray() {
        this.arr = Array.from(this.items);
        return this.arr;
    }

    sort(indices) {
        var min = indices[0];
        var max = indices[indices.length - 1];
        if (min < max) {
            var cut_arr = this.items.slice(min, max + 1);
            cut_arr.sort(this.func_sort);
            Array.prototype.splice.apply(this.items, [min, cut_arr.length].concat(cut_arr));
            return this.items;
        }
        else {
            var min1 = max;
            var max1 = min;
            var cut_arr = this.items.slice(min1, max1 + 1);
            cut_arr.sort(this.func_sort);
            Array.prototype.splice.apply(this.items, [min1, cut_arr.length].concat(cut_arr));
            return this.items;
        }
    }


    setComparator(compareFunction) {
   this.func_sort=compareFunction;
    }


}
module.exports = Sorter;