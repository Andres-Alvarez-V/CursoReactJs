const path = require('path');
const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//Este plugin nos va ayudar a extraer el css del bundle 


module.exports= {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //Requerimos path que instanciamos previamente y utilizamos el resolve que nos va a permitir identificar el directorio en el que nos encontramos y un directorio en el cual vamos a guardar nuestros archivos
        filename: 'bundle.js', //Este es el nombre que le daremos a nuestro archivo principal el cual se va a crear y que va a guardar todo lo compilado
    },
    resolve: { //Este elemento nos ayudar a resolver las extensiones que vamos a utilizar en nuestro proyecto
        extensions: ['.js', '.jsx']
    },
    module : { //Modulo con las reglas necesarias para nuestro proyecto
        rules: [
            {   //Esta regla nos permite trabajar con los archivos js y jsx
                test: /\.(js|jsx)$/, //Esto nos sirve para la identificacion de nuestros archivos de js y jsx
                exclude: /node_modules/, //Excluimos toda la carpeta de node_modules
                use: {
                    loader: "babel-loader"
                }
            },
            {   //Nos permite trabajar con los archivos html
               test: /\.html$/,
               use: [
                   {
                       loader: 'html-loader'
                   }
               ]
            },
            {   //Regla que se encarga de identificar los archivos scss o css
                test: /\.(s*)css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: 'assets/[hash].[ext]'//Se van a guardar las imagenes  con el nombre de un hash respetando la extension
                        }
                    }
                ]
            }
        ]
    },
    plugins: [//Aqui añadimos todos los plugins que necesitamos
        new HtmlWebPackPlugin({//Creamos una referencia al HtmlWebPackPlugin
            template: './public/index.html',// Este template es para saber donde esta ubicado el template que vamos a utilizar
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({//Este plugin nos ayudar a crear el nuevo css a nuestro proyecto
            filename: 'assets/[name].css',
        })
    ]
}