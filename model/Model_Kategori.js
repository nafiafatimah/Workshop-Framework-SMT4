const connection = require('../config/database');

class Model_Kategori {

    //Method untuk mengambil data dari tabel.
    static async getAll() {
        return new Promise((resolve, reject) => {
            connection.query('select * from kategori order by id_kategori desc', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    //Method untuk menyimpan data kedalam tabel.
    static async Store(Data) {
        return new Promise((resolve, reject) => {
            connection.query('insert into kategori set ?', Data, function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    //Method untuk mengambil data berdasarkan ID dari tabel.
    static async getId(id) {
        return new Promise((resolve, reject) => {
            connection.query('select * from kategori where id_kategori = ' + id,  (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    //Model untuk memperabrui data berdasarkan ID  dari tabel.
    static async Update(id, Data) {
        return new Promise((resolve, reject) => {
            connection.query('update kategori set ? where id_kategori = '+ id, Data, function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    //Method untuk menghapus data dari tabel.
    static async Delete(id) {
        return new Promise((resolve, reject) => {
            connection.query('delete from kategori where id_kategori = ' + id,  (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = Model_Kategori;